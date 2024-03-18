## Styrkor

Koden är skriven i TypeScript, vilket använder statisk typning som innebär att variabler inte kan konverteras implicit mellan olika typer. Dessutom upptäcker TypeScript fel innan koden kompileras, vilket förenklar felsökning och kontroll av dataflödet.

Koden är också uppdelad i flera moduler, vilket gör den lättare att läsa och underhålla. Funktionerna är oberoende av varandra, vilket minskar risken för att en funktion påverkar hela koden och gör felsökningen tydligare när problem uppstår. Jag har även organiserat de mest använda variablerna i en ts-fil för att undvika omdeklaration och för att göra det enklare att hantera ändringar. När jag importerar modulen inkluderas alla nödvändiga variabler, vilket sparar tid och minskar risken för felaktig hantering av data.

Deklarativ programmering används genom funktioner som 'contains', 'map' och 'filter', samt genom användning av beskrivande variabelnamn för att göra koden självförklarande och lättläst. För felhantering utnyttjar jag type guards i form av if-satser som kontrollerar om en variabel är null. Detta säkerställer att funktionen inte körs i onödan när variabeln är null.

## Svagheter

En svaghet jag har märkt i koden är event-hanteringen för element. Istället för att lägga till event listeners på varje child-element, kan jag använda event delegation genom att lägga till en enda event listener på det gemensamma förälderelementet. Detta minskar antalet event listeners och förbättrar prestandan. Ett problem som jag stötte på var att funktionaliteten för en dropdown påverkade alla element med en specifik klass, vilket ledde till att när jag klickade på ett element med en dropdown öppnades alla dropdowns samtidigt. För att lösa detta använde jag event delegation och en type guard för att säkerställa att bara det klickade elementet hanterades.

Även om jag använder självförklarande variabelnamn kan ytterligare kommentarer göra koden mer begriplig, särskilt när jag använder variabler som "variables.ul_lists[0]". För att undvika förvirring mellan variabler som delas mellan moduler kan jag överväga att använda en annan namngivningskonvention eller kommentera variabler som används på flera platser.
