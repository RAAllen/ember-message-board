import Ember from 'ember';

export function popularQuestion(params/*, hash*/) {
  var question = params[0];
  if(question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<p><span class="glyphicon glyphicon-fire"></span> Hot Question <span class="glyphicon glyphicon-fire"></span></p>');
  }
}

export default Ember.Helper.helper(popularQuestion);
