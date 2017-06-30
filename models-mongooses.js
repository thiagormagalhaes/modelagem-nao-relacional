var user = mongoose.Schema({
    facebook_id: String
  , first_name : String
  , last_name  : String
  , birth      : Date

  , address    : {
      state: String
    , city : String
  }

  , email      : String
  , pass       : String
  , record     : Date
  , last_access: Date
  , active     : Boolean

  , extras     : {
      course  : String
    , language: String
  }

});

var school = mongoose.Schema({
    name    : String
  , acronimo: String

  , address : {
      state : String
    , city  : String
    , street: String
    , number: String
  }

  , administrators:
    [{
      user_id : String
    }]

  , teachers:
    [{
      user_id: String
    }]

  , classes :
    [{
        name    : String
      , students:
        [{
          user_id: String
        }]
      , simulateds:
        [{
            begin: Date
          , end  : Date
          , simulated_hash: String
          , questions:
            [{
              question_id: String
            }]
        }]
    }]

});

var question = mongoose.Schema({
    text_auxiliary: String
  , description   : String
  , source        : String
  , period        : String

  , itens :
    [{
        description: String
      , answer     : Boolean
    }]

  , target : String
  , area   : String
  , subarea: String
  , level  : number
  , status : Boolean
})

var simulated = mongoose.Schema({
    description: String
  , begin      : Date
  , end        : Date

  , user_id    : String
  , hash       : String

  , questions:
    [{
      text_auxiliary: String
    , description   : String
    , source        : String
    , period        : String

    , itens :
      [{
          description: String
        , answer     : Boolean
        , marked     : Boolean
      }]

    , target : String
    , area   : String
    , subarea: String
    , level  : number
    }]

})