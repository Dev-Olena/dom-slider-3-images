class Slider {
    constructor(slides) {
        this._slides = slides;
        this.currentIndex = 0;
    }

    get currentIndex() {
        return this._currentIndex;
    }

    set currentIndex(v) {
        if(typeof v !== 'number'){
            throw new TypeError('Index must be a number');
        }
        if(v < 0 || v > this._slides.length) {
            throw new RangeError('Index is invalid');
        }
        this._currentIndex = v;
    }

    get currentSlide(){
        return this._slides[this.currentIndex];
    }

    get next() {
      return (this.currentIndex + 1) % this._slides.length;

    }

    get prev() {
        return (this.currentIndex - 1 + this._slides.length) % this._slides.length;
    }

}