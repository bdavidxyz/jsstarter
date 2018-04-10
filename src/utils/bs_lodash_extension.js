if (typeof _  == "function") {
  _.mixin({
    isNonEmptyString: function ( str ) {
      return _.isString(str) && !_.isEmpty(str) && !_.isEmpty(_.trim(str))
    }

  })
}
