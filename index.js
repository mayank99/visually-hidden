export class VisuallyHidden extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		const styles = new CSSStyleSheet();
		styles.replaceSync(`
			:host(:not(:focus-within, :active)) {
				clip-path: inset(50%) !important;
				white-space: nowrap !important;
				user-select: none !important;
				border: 0 !important;
				width: 1px !important;
				height: 1px !important;
				margin: -1px !important;
				position: absolute !important;
				overflow: hidden !important;
			}		
		`);
		shadow.adoptedStyleSheets.push(styles);
		shadow.appendChild(document.createElement('slot'));
	}
}

if (!customElements.get('visually-hidden')) {
	customElements.define('visually-hidden', VisuallyHidden);
}
