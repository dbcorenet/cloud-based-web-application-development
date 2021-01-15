var Handlebars  = require('hbs');

Handlebars.registerPartial(
    "person",
    "{{person.name}} is {{person.age}} years old.\n"
)