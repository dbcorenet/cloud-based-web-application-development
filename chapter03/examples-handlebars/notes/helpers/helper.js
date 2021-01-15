var Handlebars  = require('hbs');


Handlebars.registerHelper('loud', function (aString) {
    return aString.toUpperCase();
})

Handlebars.registerHelper('print-person', function () {
    return this.firstname + ' ' + this.lastname;
})

Handlebars.registerHelper("list", function(items, options) {

     const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
     //const itemsAsHtml = items.map(item => "<li>" + options.inverse(item) + "</li>");
      return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
    //return items[0].firstname + ' ' + items[0].lastname; // this[0].firstname 사용할 수 없음
});