 // this is our aray/list of plant - add as many as you like
        let arrPlants = ["cactus", "flower", "Aloe", "Rose", "strawberry", "tree", 
        "Hydranga"];
        // shortcut to the unordered list that will show our plants
        let ulPlants = document.getElementById("ulPlants")

        // this function will loop through the plants in the array and add them to the
        // unplants unordered list as list items
        function showPlants(){
            // clear out the ulPlants list before adding any plants to it
            ulPlants.textContent = "";

            // forEach is just another way of looping through the array
            arrPlants.forEach(function(plant, index){
                // create a list item to hold the current plant name as we loop through 
                let li = document.createElement("li");
                // set the text of the list item to our plant name
                li.textContent = plant;


                // add an event handler to allow the plant to be deleted
                li.onclick = function(){
                    // ask the user if they really want to delete the plant
                    if(confirm("remove " + plant + "?")){
                        // remove the plant from the array
                        arrPlants.splice(index, 1);
                        // refresh plant list
                        showPlants();
                    }
                }


                // add the plant to the list
                ulPlants.appendChild(li);
            });
        }


        function addPlant(){
            // get the text that the user entered into the add plant textbox
            let newPlant = document.getElementById("txtNewPlant").value.trim();

            // make sure the input is not empty
            if (newPlant == ""){
                document.getElementById("divMessage").textContent = "Please enter a valid plant name";
                // we're done
                return;
            }


            // this code was removed as i asked AI about the idea of denying duplicates and didn't feel right about leaving it in. 
            // i copy and pasted the code it gave and used AI to try understanding what each element meant
    //         let exists = arrPlants.some(function(plant){
    //     return plant.toLowerCase() === newPlant.toLowerCase();
    // });


    // if (exists){
    //     document.getElementById("divMessage").textContent = "That plant already exists!";
    //     return;
    // }

            // add the plant to the array
            arrPlants.push(newPlant);

            // let user know the plant was added
            document.getElementById("divMessage").textContent = newPlant + " was added to the list!";
            
            // erase the text from the textbox
            document.getElementById("txtNewPlant").value = "";
            
            // we need to call show plants again so we see the new plants on the page
            showPlants();
        }


        // the show plant is just another way of looping through the array
        showPlants(); // on Tuesday, we will create an anonymous function to add the items to 
        // the unordered list


        /* let plant1 = "cactus";
        let plant2 = "flower";
        let plant3 = "Aloe";
        let plant4 = "Rose";
        let plant5 = "strawberry";
        let plant6 = "tree";
        let plant7 = "Hydranga";
        
        console.log("plant1 = " + plant1);
        console.log("plant2 = " + plant2);
        console.log("plant3 = " + plant3);
        console.log("plant4 = " + plant4);
        console.log("plant5 = " + plant5);
        console.log("plant6 = " + plant6);
        console.log("plant7 = " + plant7);
        */ 

        // instead of setting up seven seperate variables, we are setting up 1 array with 7 
        // slots
        // watch out for the dreaded index out of bounds exception - most of the time 
        // when you see this error, it is because you are trying to access the item that
        // matches the number of items in the array, so in this case, 7 - there is no 7th
        // element in this array, the elements are in the 0 - 6 index
       /* let arrPlants = ["cactus", "flower", "Aloe", "Rose", "strawberry", "tree", 
        "Hydranga"];

        // loop through the array
        for (let i = 0; i < arrPlants.length; i++){
            console.log("plant" + (i+1) + " = " + arrPlants[i]);
        }
        */