<template>
	<div @click.self="focusLastEditorBlock($event.target)" class="text-editor">
		<div
			ref="editArea"
			@input.capture="updateEditorBlock($event.target)"
			@keydown.capture.8="removeEditorBlock($event.target)"
			@keydown.capture.46="removeEditorBlock($event.target, true)"
			@focus.capture="showGlobalTools($event.target)"
			@blur.capture="hideGlobalTools"
			class="text-editor__edit-area"
		>
			<div class="text-editor__edit-block" contenteditable></div>
		</div>
		<div
			v-show="globalTools"
			ref="globalTools"
			class="text-editor__tools text-editor__global-tools"
		>
			<icon icon="plus" class="text-editor__show-toolsbar-icon" />
			<ul
				@click.capture="updateHtml($event.target)"
				@mouseenter="canHideGlobalTools = false"
				@mouseleave="unhoverGlobalTools"
				class="text-editor__toolsbar"
			>
				<li>
					<icon data-tool="header" icon="heading" class="text-editor__toolsbar-icon" title="Заголовок" />
				</li>
				<li>
					<icon data-tool="code" icon="code" class="text-editor__toolsbar-icon" title="Код" />
				</li>
				<li>
					<icon data-tool="list" icon="list-ul" class="text-editor__toolsbar-icon" title="Список" />
				</li>
				<li>
					<icon data-tool="image" icon="image" class="text-editor__toolsbar-icon" title="Картинка" data-hasfields />
					<ul class="text-editor__toolsbar text-editor__toolsbar-fields">
						<li>
							<input class="text-editor__toolsbar-input" type="text" placeholder="Ссылка">
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TextEditor',
		data: () => ({
			focusBlock: null,
			globalTools: false,
			canHideGlobalTools: true
		}),
		methods: {
			focusLastEditorBlock(obj) {
				if(!obj.classList.contains('text-editor')) return

				if(this.$refs.editArea.lastElementChild.textContent) {
					this.addEditorBlock(this.$refs.editArea.lastElementChild)
				} else {
					this.$refs.editArea.lastElementChild.focus()
				}
			},

			updateEditorBlock(obj) {
				if(obj.innerText.indexOf('\n') >= 0) {
					var text = obj.innerText.split('\n')
					var last_obj = obj;
					obj.innerText = text[0]
					for(var i = 1; i < text.length; i++) {
						if(text[i] || i == text.length - 1)
							last_obj = this.addEditorBlock(last_obj, text[i])
					}
				} else if(this.globalTools && obj.textContent) {
					console.log("yes")
					this.hideGlobalTools()
				} else if(!this.globalTools && !obj.textContent) {
					this.showGlobalTools(obj)
				}
			},

			addEditorBlock(obj, text='') {
				var element = document.createElement('div')
				element.classList.add('text-editor__edit-block')
				element.setAttribute('contenteditable', '')
				element.innerText = text
				obj.after(element)
				element.focus()
				return element
			},

			removeEditorBlock(obj, focusNext=false) {
				if(!obj.textContent && obj.classList.value != 'text-editor__edit-block') {
					obj.classList.value = 'text-editor__edit-block'
					obj.innerHTML = ''
					obj.focus()
					this.showGlobalTools(obj)
				}
				if(obj.textContent) return
				if(!obj.nextElementSibling && focusNext) return
				if(!obj.previousElementSibling && !focusNext) return

				var range = document.createRange()

				if(focusNext) {
					if(obj.nextElementSibling.textContent)
						obj.nextElementSibling.innerHTML = `.${obj.nextElementSibling.innerHTML}`
					range.selectNodeContents(obj.nextElementSibling)
					range.collapse(true)
				} else {
					if(obj.previousElementSibling.textContent)
						obj.previousElementSibling.innerHTML += '.'
					range.selectNodeContents(obj.previousElementSibling)
					range.collapse(false)
				}
				
				obj.remove()
				window.getSelection().removeAllRanges()
				window.getSelection().addRange(range)
			},

			showGlobalTools(obj) {
				if(obj.textContent || obj.classList.value != 'text-editor__edit-block') return

				this.focusBlock = obj
				console.log('Set focus block')

				this.globalTools = true
				this.$refs.globalTools.style.top = `${obj.offsetTop}px`
				this.$refs.globalTools.style.left = `${obj.offsetLeft + 10}px`
			},

			hideGlobalTools() {
				if(this.canHideGlobalTools) {
					this.focusBlock = null
					console.log('Remove focus block')

					this.globalTools = false
				}
			},

			unhoverGlobalTools() {
				this.canHideGlobalTools = true
				var elements = document.querySelectorAll('.text-editor__global-tools .text-editor__toolsbar-fields')
				elements == 1
				setTimeout(() => {
					for(var i = 0; i < elements.length; i++) {
						elements[i].style.display = 'none'
						elements[i].parentElement.parentElement.style.overflow = 'hidden'
					}
				}, 300)
			},

			updateHtml(obj) {
				if(obj.tagName == 'path') obj = obj.parentElement
				if(obj.tagName != 'svg') return

				if(obj.hasAttribute('data-hasfields')) {
					obj.nextElementSibling.style.display = 'flex'
					obj.parentElement.parentElement.style.overflow = 'visible'
					return
				}

				var html = ''
				var cls = obj.getAttribute('data-tool')

				this.focusBlock.innerHTML = html
				this.focusBlock.classList.add(`text-editor__${cls}`)
				this.focusBlock.focus()
				this.canHideGlobalTools = true
				this.hideGlobalTools()
				console.log('update end')
			}
		}
	}
</script>

<style>
	.text-editor {
		position: relative;
	}

	.text-editor__edit-block {
		outline: none;
	}

	.text-editor__tools {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 15px;
	}

	.text-editor__global-tools {

	}

	.text-editor__show-toolsbar-icon:hover + .text-editor__toolsbar,
	.text-editor__toolsbar:hover {
		opacity: 1;
		max-height: 50px;
	}

	.text-editor__toolsbar {
		display: flex;
		position: absolute;
		list-style: none;
		padding: 0;
		margin: 0;
		opacity: 0;
		max-height: 0;
		overflow: hidden;
		transition: .3s;
	}

	.text-editor__toolsbar > li {
		border-top: 1px solid #8e44ad;
		border-bottom: 1px solid #8e44ad;
		background: #9b59b6;
		color: #fff;
		transition: .2s;
	}

	.text-editor__toolsbar > li:first-child {
		border-left: 1px solid #8e44ad;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}

	.text-editor__toolsbar > li:last-child {
		border-right: 1px solid #8e44ad;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	.text-editor__toolsbar > li:hover {
		background: #8e44ad;
		cursor: pointer;
	}

	.text-editor__toolsbar-icon {
		display: block;
		padding: 6px 9px;
	}

	.text-editor__toolsbar-fields {
		display: none;
		top: 0;
		left: 0;
		min-width: 100%;
		height: 100%;
		opacity: 1;
		max-height: 50px;
	}

	.text-editor__toolsbar-input {
		padding: 0 5px;
		height: 100%;
		border: none;
		background: none;
		font-family: 'Montserrat', sans-serif;
		font-size: 15px;
		color: #fff;
		outline: none;
	}

	.text-editor__toolsbar-input::placeholder {
		color: #ddd;
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