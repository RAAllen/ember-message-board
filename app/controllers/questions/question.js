import Ember from 'ember';

export default Ember.Controller.extend({
  currentWatchList: Ember.inject.service(),
  actions: {
    add(){
      this.get('currentWatchList').add(this.get('model'))
    }
  }
})
