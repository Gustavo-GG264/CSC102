//    a 2d array of problems to fill out our table
           let arrProblems = [
                ["Crowdstrike", 2024, "$5.48", "Faulty update to security software"],
                ["Facebook", 2020, "$90M", "Misconfiguration which caused downtime"],
                ["Citibank", 2020, "$900M", "Mistaken transfer"],
                ["Mars Climate Orbiter", 1999, "$327M", "Metric versus imperial measurement Mismatch"],
            ];

            // loop through the data and display it in the table
            for(let i = 0; i <arrProblems.length; i++){
                // create a new table row
                let tr = document.createElement("tr");

                // inner/nested loop - we ussualy use j as the counter for our nested loop
                for(let j = 0; j < arrProblems[i].length; j++){
                // create a new table data
                let td = document.createElement("td");

                // set the data as the textcontent value of the td
                td.textContent = arrProblems[i][j];

                // add the td to the tr
                tr.appendChild(td);
                }

                // add the table row to the table
            document.getElementById("tblData").appendChild(tr);
            }