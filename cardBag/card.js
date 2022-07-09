class Card {
    constructor({
        imgUrl,
        onDismiss
    }) {
        this.imgUrl = imgUrl;
        this.onDismiss = onDismiss;
        this.#init()
    }
    #startPoint;
    #offsetX;
    #offsetY;
    #init = () => {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = this.imgUrl;
        card.append(img);
        this.element = card;
        this.#listenToMouseEvents();
    }

    
    #listenToMouseEvents = () => {
        this.element.addEventListener('mousedown', (e) => {
            const {clientX, clientY} = e;
            this.#startPoint = {x: clientX, y: clientY};
            document.addEventListener('mousemove', this.#handleMouseMove)
        });
        document.addEventListener('mouseup', this.#handleMouseUp);

        this.element.addEventListener('dragstart',(e) => {
            e.preventDefault();
        })

    }
    
    #handleMouseMove = (e) => {
        if(!this.#startPoint) return;
        const {clientX, clientY} = e;
        this.element.style.transition = 'transform 0s'
        this.#offsetX = clientX - this.#startPoint.x;
        this.#offsetY = clientY - this.#startPoint.y;
        const rotate = this.#offsetX * 0.1;
        this.element.style.transform = `
            translate(${this.#offsetX}px, ${this.#offsetY}px) 
            rotate(${rotate}deg)
        `;

        if(Math.abs(this.#offsetX) > this.element.clientWidth * 0.7){
            const direction = this.#offsetX > 0 ? 1: -1;
            this.#dismiss(direction);
        }
    }

    #handleMouseUp = (e) => {
        this.#startPoint = null;
        document.removeEventListener('mousemove', this.#handleMouseMove);
        this.element.style.transition = 'transform 0.5s'
        this.element.style.transform = '';
    }
    
    #dismiss = (direction) => {
        this.#startPoint = null;
        document.removeEventListener('mousedown', this.#handleMouseMove);
        document.removeEventListener('mouseup', this.#handleMouseUp);
        this.element.style.transition = 'transform 0.8s';
        this.element.style.transform = `
            translate(${direction * window.innerWidth}px, ${this.#offsetY}px)
            rotate(${direction * 90}deg)
        `;
        this.element.classList.add('disMiss');

        setTimeout(() => {
            this.element.remove();
        }, 800);

        if(typeof this.onDismiss === 'function') {
            this.onDismiss();
        }
    }
}