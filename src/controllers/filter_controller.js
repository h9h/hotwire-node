import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = [ "button" ]
    static values = { openTab: Number }
    
    initialize() {
        this.openTab = 1
        this.showTab(this.openTab)
    }

    showTab(currValue) {
        this.openTab = currValue

        this.buttonTargets.forEach((element) => {
            if (pareInt(element.getAttribute("value")) === this.openTab) {
                element.classList.remove('text-red-600')
                element.classList.remove('bg-white')
                element.classList.add('text-white')
                element.classList.add('bg-red-600')
            } else if (parseInt(element.getAttribute("value")) !== this.openTab) {
                element.classList.remove('text-white')
                element.classList.remove('bg-red-600')
                element.classList.add('text-red-600')
                element.classList.add('bg-white')
            }
        });
    }


    showTab1() {
        this.showTab(1);
    }
    showTab2() {
        this.showTab(2);
    }
    showTab3() {
        this.showTab(3);
    }
    showTab4() {
        this.showTab(4);
    }
    showTab5() {
        this.showTab(5);
    }


}