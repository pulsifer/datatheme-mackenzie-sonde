# datatheme-pgyi

> !WIP: this is work in progress.

A Datatheme is a defined [Tabular Datapackage](http://dataprotocols.org/tabular-data-package/). Essentially a Class from which you can base your Tabular Datapackage from. The intent is to have one place to define and version the data model using the [JSON Table Schema](http://dataprotocols.org/json-table-schema/).


You build the Datatheme into a base ``datapackage.json`` file which you can extend for your purpose.

A datatheme consists of a ``datatheme.json`` file which describes itself and paths to all schema resources referenced by this theme.

````
$ cat datatheme.json
{
    "name": "mackenzie.sonde",
    "version": "1.0.1",
    "repository": "http://github.com/tesera/datatheme-mackenzie-sonde.git",
    "author": "Yves Richard",
    "description": "Datatheme for Mackenzie Basin Sonde data.",
    "schemas": [
        "./schemas/sonde_data.json",
        "./schemas/sonde_meta.json"
    ]
}
````

####Building into a datapackage.json file (datatheme to datapackage)
````
$ sh ./dt2dp.sh > datapackage.json
````
