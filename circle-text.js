class CircleText extends HTMLElement {

    constructor() {
        super()
        console.log(`Longueur : ${this.textContent.length}`);
        this.width = (this.hasAttribute("data-sep")) ?
            this.textContent.length * 3.2 :
            (this.textContent.length >= 100) ?
            this.textContent.length * 2.5 + this.textContent.length / 3:
            this.textContent.length * 3


        this.width = (this.textContent.length >= 100) ?
            this.textContent.length * 2.5 + this.textContent.length / 3:
            (this.hasAttribute("data-sep")) ?
            this.textContent.length * 3.2:
            this.textContent.length * 3
        console.log(this.width)
        this.innerHTML =
            `<style>
                svg#${this.id} {
                    font-family: sans-serif;
                    letter-spacing: 0.1rem;
                    -webkit-animation: infinite linear ${this.hasAttribute("data-speed") ?
                     (this.width / 20) / this.getAttribute('data-speed'):
                      (this.width / 20)}s rotate;
                        animation: infinite linear ${this.hasAttribute("data-speed") ?
                     (this.width / 20) / this.getAttribute('data-speed'):
                      (this.width / 20)}s rotate;
                }

                svg#${this.id} text {
                    font-family: sans-serif;
                    font-size: 1rem;
                }
                @-webkit-keyframes rotate {
                    from {
                        -webkit-transform: rotate(0);
                                transform: rotate(0);
                    }
                    to {
                        -webkit-transform: rotate(360deg);
                                transform: rotate(360deg);
                    }
                }
            </style>
            <svg width="${this.width}" height="${this.width}" xmlns="http://www.w3.org/2000/svg" id="${this.id}">
                <defs>
                <circle cx="${this.width / 2}" cy="${this.width / 2}" r="${(this.width - 3) / 2}" fill="none" id="${this.id}Path" />
                </defs>
                <g>
                    <use xlink:href="#${this.id}Path" fill="none" />
                    <text>
                        <textPath xlink:href="#${this.id}Path" dominant-baseline="hanging">${this.hasAttribute("data-sep") ? this.getAttribute('data-sep') : ''} ${this.textContent}</textPath>
                    </text>
                </g>
            </svg>`
    }

    connectedCallback() {}

    disconnectedCallback() {}

}
customElements.define('circle-text', CircleText);