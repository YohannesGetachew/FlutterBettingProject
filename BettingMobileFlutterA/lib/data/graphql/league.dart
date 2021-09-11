String leaguesQuery = r''' 
  query leagues($isTop: Boolean) {
        leagues(isTop: $isTop){
          _id
           id
        name
        logo
        country {
          id
          flag
        }
        fixtures {
          _id
          id
          status
          startDate
          participants {
            id
            name
          }
          basicOdds {
            more
            odds {
              _id
              market {
                name
                id
              }
              marketId
              bets {
                id
                name
                status
                baseline
                price
                settlement
              }
            }
          }
        }
        }
      }
''';
