
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

export function initImageTrail() {
    // Only proceed if running in a browser environment
    if (typeof window === "undefined") {
        console.warn("initImageTrail: Window object is not available. Running in a non-browser environment.");
        return;
    }

    // Check for the required .content element
    const content = document.querySelector<HTMLElement>(".content");
    if (!content) {
        console.warn("initImageTrail: .content element not found in the DOM.");
        return;
    }

    // Check for .content__img elements
    const images = content.querySelectorAll<HTMLElement>(".content__img");
    if (!images || images.length === 0) {
        console.warn("initImageTrail: No .content__img elements found in the DOM.");
        return;
    }

    // ------------------ Image Class ------------------
    class Image {
        DOM: {
            el: HTMLElement;
            inner: HTMLElement | null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } | any;
        defaultStyle = {
            scale: 1,
            x: 0,
            y: 0,
            opacity: 0
        };
        timeline: gsap.core.Timeline | null = null;
        rect: DOMRect | null = null;

        constructor(DOM_el: HTMLElement) {
            if (!DOM_el) {
                console.error("Image: Element not provided.");
                return;
            }
            this.DOM = {
                el: DOM_el,
                inner: DOM_el.querySelector<HTMLElement>('.content__img-inner')
            };

            this.getRect();
            this.initEvents();
        }

        private initEvents() {
            const resize = () => {
                gsap.set(this.DOM.el, this.defaultStyle);
                this.getRect();
            };
            window.addEventListener("resize", resize);
        }

        private getRect() {
            this.rect = this.DOM.el.getBoundingClientRect();
        }
    }

    // ------------------ Utils ------------------
    const preloadImages = (selector = "img") =>
        new Promise<void>((resolve) => {
            imagesLoaded(document.querySelectorAll(selector), { background: true }, () => resolve());
        });

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const distance = (x1: number, y1: number, x2: number, y2: number) =>
        Math.hypot(x2 - x1, y2 - y1);

    const getPointerPos = (ev: MouseEvent | TouchEvent): { x: number; y: number } => {
        let posx = 0;
        let posy = 0;

        if ("touches" in ev && Array.isArray(ev.touches) && ev.touches.length > 0 && ev.touches[0]) {
            posx = ev.touches[0].pageX;
            posy = ev.touches[0].pageY;
        } else if ("clientX" in ev) {
            posx = ev.clientX;
            posy = ev.clientY;
        }
        return { x: posx, y: posy };
    };

    const getMouseDistance = (
        mousePos: { x: number; y: number },
        lastMousePos: { x: number; y: number }
    ) => distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);

    // ------------------ ImageTrail ------------------
    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { ...mousePos };
    let cacheMousePos = { ...mousePos };

    const handlePointerMove = (ev: MouseEvent | TouchEvent) => {
        ev.preventDefault?.();
        mousePos = getPointerPos(ev);
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);

    class ImageTrail {
        DOM: { el: HTMLElement };
        images: Image[] = [];
        imagesTotal = 0;
        imgPosition = 0;
        zIndexVal = 1;
        activeImagesCount = 0;
        isIdle = true;
        threshold = 80;

        constructor(DOM_el: HTMLElement) {
            this.DOM = { el: DOM_el };
            this.images = [...this.DOM.el.querySelectorAll<HTMLElement>(".content__img")].map(
                (img) => new Image(img)
            );
            this.imagesTotal = this.images.length;

            const onFirstMove = () => {
                cacheMousePos = { ...mousePos };
                requestAnimationFrame(() => this.render());
                window.removeEventListener("mousemove", onFirstMove);
            };
            window.addEventListener("mousemove", onFirstMove);
        }

        private render() {
            const distance = getMouseDistance(mousePos, lastMousePos);

            cacheMousePos.x = lerp(cacheMousePos.x, mousePos.x, 0.1);
            cacheMousePos.y = lerp(cacheMousePos.y, mousePos.y, 0.1);

            if (distance > this.threshold) {
                this.showNextImage();
                lastMousePos = { ...mousePos };
            }

            if (this.isIdle && this.zIndexVal !== 1) {
                this.zIndexVal = 1;
            }

            requestAnimationFrame(() => this.render());
        }

        private showNextImage() {
            ++this.zIndexVal;

            this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;

            const img = this.images[this.imgPosition];
            if (!img || !img.rect) return;

            gsap.killTweensOf(img.DOM.el);

            img.timeline = gsap.timeline({
                onStart: () => this.onImageActivated(),
                onComplete: () => this.onImageDeactivated()
            })
                .fromTo(
                    img.DOM.el,
                    {
                        opacity: 1,
                        scale: 1,
                        zIndex: this.zIndexVal,
                        x: cacheMousePos.x - img.rect.width / 2,
                        y: cacheMousePos.y - img.rect.height / 2
                    },
                    {
                        duration: 0.4,
                        ease: "power1",
                        x: mousePos.x - img.rect.width / 2,
                        y: mousePos.y - img.rect.height / 2
                    }
                )
                .to(
                    img.DOM.el,
                    {
                        duration: 0.4,
                        ease: "power3",
                        opacity: 0,
                        scale: 0.2
                    },
                    0.4
                );
        }

        private onImageActivated() {
            this.activeImagesCount++;
            this.isIdle = false;
        }

        private onImageDeactivated() {
            this.activeImagesCount--;
            if (this.activeImagesCount === 0) {
                this.isIdle = true;
            }
        }
    }

    // ------------------ Init ------------------
    preloadImages(".content__img-inner").then(() => {
        document.body.classList.remove("loading");
        new ImageTrail(content);
    });
}