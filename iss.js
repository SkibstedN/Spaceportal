'use strict'

class ISSrenderer {

    endpointURL = "https://api.wheretheiss.at/v1/satellites/25544";

    constructor(data) {
        this.data = data;
    }

    async fetchData() {
        let response = await fetch(this.endpointUrl);
        if (response.status == 200) {
            this.data = await response.json();

            this.updateUI();
        } else {
            alert(`Failed to get ISS data. Status: ${response.status}`)
        }
    }


    updateUI()  {

        $("#lat").text(this.data.name)

    }


}

var issRenderer = new ISSrenderer();