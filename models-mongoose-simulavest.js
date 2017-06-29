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