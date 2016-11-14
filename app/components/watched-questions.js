import Ember from 'ember';

export default Ember.Component.extend({
  questionWatcher: Ember.inject.service('question-watcher')
});
