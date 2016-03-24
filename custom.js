 /* Create by Lisichkina Jane 10.10.2015 */
 $(document).ready(function () {

     var Tabs = (function () {
         function Tabs(container) {
             this.container = $(container);
             this.controls = $(container).find('.switch-tab');
             this.wrappers = $(container).find('.tab-wrapper');
             this.init();
         }

         Tabs.prototype.init = function () {
             var self = this;

             $(this.wrappers).each(function (index) {
                 (index == 0) ? $(this).show(): $(this).hide();
             });

             this.controls.on('click', function () {
                 $(this)
                     .addClass('active')
                     .siblings()
                     .removeClass('active');

                 var i = $(self.controls).index(this);
                 $(self.wrappers).each(function (index) {
                     (index == i) ? $(this).show(): $(this).hide();

                 });

             });

         }
         return Tabs;
     })();
     var tableTabs = new Tabs('.container-switch-wrapper'); //name container which contains the necessary elements

 });