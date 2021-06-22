var colleges=["A","B","C","D","E"]
var rooms=[]
var students=[]
var maleStudents=[]
var femaleStudents=[]
var TotalStudent=0
var student_clg_dist={}
// generate buildins
var currBatchlist=[]

count=100
var buildings=[]
for(var i=0;i<4;i++){
    var rooms=[]
    for(var j=0;j<24;j++){
       
        rooms.push({
            roomNo:String(++count),
            gender:null,
            allowed:4,
            current:0,
            batch:null
            
        })
        // console.log(rooms[j].roomNo)
    }
    buildings.push({
        buildingNo:i+1,
        noOfRooms:25,

        rooms:rooms,

        
        
    })
}
// generate rooms



// generate Random From Array
Array.prototype.random = function(){
    return this[Math.floor(Math.random()*this.length)];
}
// used for sorting
function compareObjects(object1, object2, key) {
    const obj1 = object1[key]
    const obj2 = object2[key]
  
    if (obj1 < obj2) {
      return -1
    }
    if (obj1 > obj2) {
      return 1
    }
    return 0
}

function GenderCllgSort(a, b) {
    if(a.gender!=b.gender){
        if(a.gender>b.gender){

            return -1
        }
        else{
            return 1
        }
    }


    if(student_clg_dist[a.clg+a.gender]<student_clg_dist[b.clg+b.gender]){
        return 1
    }
    if(student_clg_dist[a.clg+a.gender]>student_clg_dist[b.clg+b.gender]){
        return -1
    }
    return 0
}


function BatchWise(noOfStudents,currBatch){
    console.log("Incoming batch",currBatchlist)
    // generate students
    for(var i=0;i<noOfStudents;i++){
        temp={
            clg:colleges.random(),
            gender:["M","F"].random(),
            batch:currBatch
        }
        students.push(temp)
        

    }
    TotalStudent+=students.length

    //update student clg distribution
    var temp=""
    for(var i=0;i<students.length;i++){
        temp=students[i]
        if (temp.clg+temp.gender in student_clg_dist){
            student_clg_dist[temp.clg+temp.gender]+=1
        } 
        else{
            student_clg_dist[temp.clg+temp.gender]=1
        }
    }
    
    // sort based on clg
    students.sort((a, b) => {
        return compareObjects(a, b, 'clg')
    })
    //sort based on clg count
    students.sort((a, b) => {
        return GenderCllgSort(a, b)
    })
    // sort based on gender
    students.sort((a, b) => {
        return compareObjects(a, b, 'gender')
    })
    buildings.sort((a, b) => {
        return compareObjects(a, b, 'availRoom')
    })
    // split into male and female
    for(var i=0;i<students.length;i++){
        if(students[i].gender=="M"){
            maleStudents.push(students[i])
        }
        else{
            femaleStudents.push(students[i])

        }
    }
    
    // allocating male students
    var assingedStudents=0;
    var maleIndex=0;
    for(var i=0;i<buildings.length;i++){
        var currentBuilding=buildings[i]

        for(var j=0;j<currentBuilding.rooms.length;j++){
            var currRoom=currentBuilding.rooms[j];
           
            if (currRoom.batch==null && (maleIndex<maleStudents.length)){
                currentBuilding.noOfRooms-=1
                var currStudent=maleStudents[maleIndex]
                currRoom.batch=currBatch
                currRoom.gender="M"
                // console.log(currRoom)
                while((currRoom.allowed>currRoom.current ) && (maleIndex<maleStudents.length) ){
                    currRoom.current+=1
                    maleIndex+=1
                    assingedStudents+=1
                    
                }

            }
           

        }
     
    }

    //alocating female students
    var femaleIndex=0;
for(var i=0;i<buildings.length;i++){
    var currentBuilding=buildings[i]

    for(var j=0;j<currentBuilding.rooms.length;j++){
        var currRoom=currentBuilding.rooms[j];
       

        if (currRoom.batch==null && (femaleIndex<femaleStudents.length)){
            currentBuilding.noOfRooms-=1
            var currStudent=femaleStudents[femaleIndex]
            currRoom.batch=currBatch
            currRoom.gender="F"
            while((currRoom.allowed>currRoom.current ) && (femaleIndex<femaleStudents.length) ){
                currRoom.current+=1
                femaleIndex+=1
                assingedStudents+=1
                
            }

        }
       

    }
 
}
console.log(assingedStudents,students.length,currBatch);

if(assingedStudents!=students.length){
    
    alert("not all allocated")
}
// console.log((femaleStudents.length+maleStudents.length),students.length)

for(var i=0;i<buildings.length;i++){
    var currBuild=buildings[i]
for(j=0;j<currBuild.rooms.length;j++){
    var currRoom=currBuild.rooms[j]
    if(currRoom.current!=0){
        // console.log(currRoom,"ASDF")
    }
}
}
// console.log(maleStudents.length,femaleStudents.length,currBatch)
students=[]
maleStudents=[]
femaleStudents=[]
// console.log(buildings)

temp=[]

for(var i=0;i<buildings.length;i++){
    var currBuild=buildings[i]
for(j=0;j<currBuild.rooms.length;j++){
    var currRoom=currBuild.rooms[j]
    temp.push(currRoom)
}
}
currBatchlist.push(currBatch)

// console.log(temp)
return temp;
}
// noOfStudents,batch
// BatchWise(6,2020)
// BatchWise(6,2021)
// BatchWise(6,2022)

function RemovePrevBatch(currBatch){
    var removeBatch=currBatchlist[0]
    console.log(removeBatch)
    currBatchlist.shift();
    for(var i=0;i<buildings.length;i++){
        var currBuild=buildings[i]
    for(j=0;j<currBuild.rooms.length;j++){
       var currRoom=currBuild.rooms[j]
       if(currRoom.batch==removeBatch){
        TotalStudent-=currRoom.current
    
        currRoom.gender=null,
        currRoom.current=0,
        currRoom.batch=null
        
       }
    }
    }

    temp=[]

    for(var i=0;i<buildings.length;i++){
        var currBuild=buildings[i]
    for(j=0;j<currBuild.rooms.length;j++){
        var currRoom=currBuild.rooms[j]
        temp.push(currRoom)
    }
    }
   
    
    // console.log(temp)
    return temp;
}