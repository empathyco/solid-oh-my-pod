import Subject from "rxjs";
export default class ProviderStore {

   

    currentProvider= new Subject()

    /**
     * 
     * @param {string} provider Need at least url
     */
    init(provider){
        this.currentProvider.next({url:provider})
    }

    /**
     * 
     * @param {reactState} setState 
     */
    subscribe(setState){
        this.currentProvider.subscribe(setState)
    }

    getCurrentProvider(){
        return this.currentProvider.getValue();
    }
}
