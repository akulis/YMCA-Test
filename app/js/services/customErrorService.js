four51.app.factory('CustomErrors', function() {
  var _cppMessage = "Please create a separate order for Camp Purchase Power Items. Orders with Camp items received 4/5/19 or before will ship week of 5/13/19.";
  var _hkdMessage = "Please create a separate order for Healthy Kids Day Items. Orders with HKD items received by 3/8/19 will ship week of 4/8/19.";
  var _normalCPPMessage = "Please create a separate order for stocked items. Camp Purchase Power items need to be on their own order.";
  var _normalHKDMessage = "Please create a separate order for stocked items. Healthy Kids Day items need to be on their own order.";

  return {
    cppMessage: _cppMessage,
    hkdMessage: _hkdMessage,
    normalCPPMessage: _normalCPPMessage,
    normalHKDMessage: _normalHKDMessage
  };
});