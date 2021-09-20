class Observer {
    constructor(){

    }
    update(){

    }
}

class ObserverList{
    constructor (){
        this.observerList=[];
    }
    add(observer){
        this.observerList.push(observer);
    }
    remove(observer){
        let i=this.count();
        for(; i>0; i--){
            if( observer=== this.observerList[i]){
                this.observerList.splice(i,1);
                break;
            }
        }
    }
    count(){
        return this.observerList.length;
    }
    get(index){
        return this.observerList[index];
    }
}

class Subject{
    constructor(){
        this.observers=new ObserverList();
    }
    addObserver(observer){
        this.observers.add(observer);
    }
    removeObserver(observer){
        this.observers.remove(observer);
    }
    notify(){
        let args=Array.from(arguments);
        let len=this.observers.count();
        for(let i=0;i<len;i++){
            this.observers.get(i).apply(null,args);
        }
    }
}