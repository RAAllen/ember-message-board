import Ember from 'ember';

export default Ember.Service.extend({
  watched: [],

  add(question) {
    this.get('watched').pushObject(question);
  }
});
