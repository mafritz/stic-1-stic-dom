/* 
 * To create our library we will use an object. The library should be able to :
 * 1. Identify elements with id, class or tagname
 * 2. Show elements
 * 3. Hide elements
 * 4. Highlight an element (change the background and text color)
 * 5. Add event listeners and bind it to a callback function
 */
(function() {

    //Create a prototype objet for every selection
    var MyDOM = function(selector) {
        //Normally this part should be more complex, but for this example it is enough
        this.els = document.querySelectorAll(selector);
    }

    /* 
     * Add methods to manipulate the selected elements.
     * It is important that every method return this, i.e. the selected element(s), so to allow chain manipulations
     */

    //Show all the elements selected
    MyDOM.prototype.show = function() {
        for (let i = 0; i < this.els.length; i++) {
            this.els[i].style.display = "block";
        }
        return this;
    }

    //Hide all the elements selected
    MyDOM.prototype.hide = function() {
        for (let i = 0; i < this.els.length; i++) {
            this.els[i].style.display = "none";
        }
        return this;
    }

    //Highlight an element
    MyDOM.prototype.highlight = function(bgcolor, color) {
        for (let i = 0; i < this.els.length; i++) {
            this.els[i].style.backgroundColor = bgcolor;
            this.els[i].style.color = color;
        }
        return this;
    }

    //Add event listeners to selected elements with a callback function
    MyDOM.prototype.on = function(event, callback) {
        for (let i = 0; i < this.els.length; i++) {
            this.els[i].addEventListener(event, callback);
        }
        return this;
    }

    /*
     * Create a global function for selecting elements to which methods will be chained
     * The function must return a newly created MyDOM object
     */
    window.sticDOM = function(selector) {
        return new MyDOM(selector);
    }

})();

/**
 * At this point the sticDOM() function is available globally
 * It can be used and chained to the MyDOM methods (show, hide, etc.) :
 * sticDOM("p").hide();
 * sticDOM(".welcome").show().highlight("#000066", "#FFFFFF");
 * sticDOM("#myBtn").on("click", function () { 
 *   console.log("You have clicked the button")
 * });
 * ...
 */
