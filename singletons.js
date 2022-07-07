Singletons = {
    isStart :false,
    isEnd : false,
    isPause : false,
    isResume : false,

    p1LeftController: false,
    p1RightController: false,

    p2LeftController: false,
    p2RightController: false,
}



// Create function a sweep and prune Sweep and Prune Algoritm
//1. Create a  AABB struct that takes as pointer the X axis projection.
//2.Create the AABB Sorted array with a max number.
//3. Create the active list where to save the current's AABB structs.
//4. Create method that handle the  appendement of the objects in the active list.
//5. call the intersection test of the objects in the active list.
//6. Update the Active List.
//7. Update the AABB Sorted Array.
//8. Update the AABB structs.
//9. Update the objects.

/*
SweepandPruneAlgoritm(){
    this.AABB = []
    this.AABB_Sorted = []
    this.activeList = []
    this.update = function(){
        this.AABB.forEach(function(element){
            element.update()
        }
        )
        this.AABB_Sorted.forEach(function(element){
            element.update()
        }
        )
        this.activeList.forEach(function(element){
            element.update()
        }
        )
    }
    this.append = function(object){
        this.activeList.push(object)
    }
    this.intersectionTest = function(){
        this.activeList.forEach(function(element){
            element.intersectionTest()
        }
        )
    }
    this.updateAABB = function(){
        this.AABB.forEach(function(element){
            element.update()
        }
        )
    }
    this.updateAABB_Sorted = function(){
        this.AABB_Sorted.forEach(function(element){
            element.update()
        }
        )
    }
    this.updateActiveList = function(){
        this.activeList.forEach(function(element){
            element.update()
        }
        )
    }

    
}

*/