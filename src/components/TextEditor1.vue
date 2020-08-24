<template>
	<div class="text-editor">
		<div 
			@input.capture="updateEditorBlock($event.target)"
			@keydown.capture.8="removeEditorBlock($event.target, true)"
			@keydown.capture.46="removeEditorBlock($event.target, false, true)"
			@focus.capture="showTools($event.target)"
			@blur.capture="hideTools"
			class="text-editor__edit-area"
		>
			<div class="text-editor__edit-block" onselectionchange="console.log('hello world')" contenteditable></div>
		</div>

		<div ref="htmlTools" class="text-editor__tools text-editor__html-tools">
			<icon icon="plus" class="text-editor__tools-icon" />
			<ul
				@click.capture="htmlToolsAdd($event.target)"
				@mouseover="htmlToolsbarHover = true"
				@mouseout="htmlToolsbarHover = false"
				ref="htmlToolsbar"
				class="text-editor__toolsbar"
			>
				<li>
					<icon id="header-tools" icon="heading" class="text-editor__toolsbar-icon" title="Заголовок" />
				</li>
				<li>
					<icon id="code-tools" icon="code" class="text-editor__toolsbar-icon" title="Код" />
				</li>
				<li>
					<icon id="list-tools" icon="list-ul" class="text-editor__toolsbar-icon" title="Список" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TextEditor',
		data: () => ({
			toolsView: false,
			htmlToolsbarHover: false,
			focusBlock: null
		}),
		methods: {
			updateEditorBlock(obj) {
				if(obj.querySelector('div')) {
					if(obj.classList.contains('text-editor__code')) return

					var html = obj.querySelector('div').innerHTML.replace('<br>', '')
					var divs = obj.querySelectorAll('div')
					for(var i = 0; i < divs.length; i++)
						divs[i].remove()
					this.addEditorBlock(obj, html)
				} else if(this.toolsView && obj.textContent) {
					this.hideTools()
				} else if(!this.toolsView && !obj.textContent) {
					this.showTools(obj)
				}
			},

			addEditorBlock(obj, html) {
				if(!obj.textContent)
					return obj
				var element = document.createElement('div')
				element.classList.add('text-editor__edit-block')
				element.setAttribute('contenteditable', '')
				element.innerHTML = html
				obj.after(element)
				obj.nextElementSibling.focus()
				return obj.nextElementSibling
			},

			removeEditorBlock(obj, back=false, del=false) {
				if(!obj.textContent && obj.classList.value != 'text-editor__edit-block') {
					obj.classList.value = 'text-editor__edit-block'
					obj.innerHTML = ''
					obj.focus()
					this.showTools(obj)
				} else if(!obj.textContent && obj.parentElement.childElementCount > 1) {
					var range = document.createRange()
					if(back && obj.previousElementSibling) {
						obj.previousElementSibling.innerHTML += '.'
						range.selectNodeContents(obj.previousElementSibling)
						range.collapse()
					} else if(del && obj.nextElementSibling) {
						obj.nextElementSibling.innerHTML = '.' + obj.nextElementSibling.innerHTML
						range.selectNodeContents(obj.nextElementSibling)
						range.collapse(true)
					} else return
					obj.remove()
					window.getSelection().removeAllRanges()
					window.getSelection().addRange(range)
				}
			},

			clearAll: () => {
				var blocks = document.querySelectorAll('.text-editor__edit-block')
				blocks[0].innerHTML = ''
				blocks[0].classList.value = 'text-editor__edit-block'
				for(var i = 1; i < blocks.length; i++)
					blocks[i].remove()
			},

			getContent: () => {
				var content = ''
				var blocks = document.querySelectorAll('.text-editor__edit-block')
				for(var i = 0; i < blocks.length; i++)
					if(blocks[i].textContent.trim()) {
						if(blocks[i].classList.contains('text-editor__header')) {
							content += `<div class="header">${blocks[i].textContent}</div>`
						} else if(blocks[i].classList.contains('text-editor__code')) {
							content += `<div class="code">${blocks[i].innerHTML}</div>`
						} else if(blocks[i].classList.contains('text-editor__list')) {
							content += '<div class="list"><ul>'
							for(var j = 0; j < blocks[i].querySelectorAll('ul > li').length; j++) {
								if(blocks[i].querySelectorAll('ul > li')[j].textContent)
									content += `<li>${blocks[i].querySelectorAll('ul > li')[j].textContent}</li>`
							}
							content += '</ul></div>'
						} else {
							content += `<div>${blocks[i].textContent}</div>`
						}
					}
				return content
			},

			showTools(obj) {
				this.focusBlock = obj

				if(!obj.textContent && obj.classList.value == 'text-editor__edit-block') {
					this.toolsView = true
					this.$refs.htmlTools.style.display = 'block'
					this.$refs.htmlTools.style.top = `${obj.offsetTop}px`
					this.$refs.htmlTools.style.left = `${obj.offsetLeft + 10}px`
				}
			},

			hideTools() {
				if(!this.htmlToolsbarHover) {
					this.focusBlock = null
					this.toolsView = false
					this.$refs.htmlTools.style.display = 'none'
				}
			},

			htmlToolsAdd(obj) {
				if(obj.tagName == 'path')
					obj = obj.parentElement

				var html = ''
				var cls = ''

				switch(obj.id) {
					case 'header-tools':
						cls = 'header'
						break
					case 'code-tools':
						cls = 'code'
						break
					case 'list-tools':
						cls = 'list'
						html = '<ul><li></li></ul>'
						break
				}

				this.focusBlock.innerHTML = html
				this.focusBlock.classList.add(`text-editor__${cls}`)

				var range = document.createRange()
				range.selectNodeContents(this.focusBlock)
				range.collapse()
				window.getSelection().removeAllRanges()
				window.getSelection().addRange(range)

				this.htmlToolsbarHover = false
				this.hideTools()
			},

			showTransformToolsbar(event) {
				console.log(event)
			}
		}
	}
</script>

<style>
	.text-editor {
		position: relative;
		font-size: 16px;
	}

	.text-editor__edit-block:focus {
		outline: none;
	}

	.text-editor__tools {
		display: none;
		position: absolute;
		left: 0;
		top: 0;
		font-size: 15px;
	}

	.text-editor__tools-icon:hover + .text-editor__toolsbar,
	.text-editor__toolsbar:hover {
		opacity: 1;
		max-height: 50px;
	}

	.text-editor__toolsbar {
		list-style: none;
		display: flex;
		position: absolute;
		margin: 0;
		padding: 0;
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: .3s;
	}

	.text-editor__toolsbar > li {
		display: flex;
		align-items: center;
		background: #9b59b6;
		color: #fff;
	}

	.text-editor__toolsbar > li:hover {
		background: #8e44ad;
		cursor: pointer;
	}

	.text-editor__toolsbar > li:first-child {
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.text-editor__toolsbar > li:last-child {
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.text-editor__toolsbar-icon {
		display: block;
		padding: 7px 10px;
		font-size: 15px;
	}


	/* editor */

	.text-editor__header {
		font-size: 25px;
	}

	.text-editor__code {
		background: #444;
		border: 1px solid #333;
		border-radius: 5px;
		padding: 10px;
		color: #fff;
		font-size: 14px;
	}

	.text-editor__list > ul {
		margin: 0;
		padding-left: 40px;
	}
</style>