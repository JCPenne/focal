const data = {
  f01: {
    name: 'Alice',
    age: 15,
    follows: ['f02', 'f03', 'f04'],
  },
  f02: {
    name: 'Bob',
    age: 20,
    follows: ['f05', 'f06'],
  },
  f03: {
    name: 'Charlie',
    age: 35,
    follows: ['f01', 'f04', 'f06'],
  },
  f04: {
    name: 'Debbie',
    age: 40,
    follows: ['f01', 'f02', 'f03', 'f05', 'f06'],
  },
  f05: {
    name: 'Elizabeth',
    age: 45,
    follows: ['f04'],
  },
  f06: {
    name: 'Finn',
    age: 25,
    follows: ['f05'],
  },
};

const biggestFollower = function (data) {
  let counter = 0
  let result = ''
  for (user in data) {
    let followList = data[user]['follows'].length;
    if (followList > counter) {
      counter = followList;
      result = data[user]['name']
    }
  }
  console.log(`${result} has the largest follow list with: ${counter}`);  
};
//biggestFollower(data);


const allFollowers = function (userID) {
  const result = Object.keys(data).filter(id =>
    data[id]['follows'].includes(userID)
    );
    return result.map(id => data[id]['name']);
  };
  
  const mostPopular = function (data) {
    let result = '';
    let counter = 0;
    let list = []
    for (user in data) {
      let followerLength = allFollowers(user).length
      if (followerLength === counter) {
        counter = followerLength;
        result += ' and ' + data[user]['name'];
        list += ' / ' + allFollowers(user)
      }
      if (followerLength > counter) {
        counter = followerLength
        result = data[user]['name']
        list = allFollowers(user)
      }
    }
  console.log(`${result} has the most followers with: ${counter}. Their followers are ${list}`);
}
mostPopular(data);















const getWhoFollowsNames = function (data, userID) {
  const followsIDs = data[userID]['follows'];
  const followsNames = followsIDs.map(id => data[id]['name']);
  return followsNames;
};



//New printAll2 function is below, along with it's helper functions
const createNewObj = function (data) {
  let createdObject = {};

  for (person in data) {
    let name = data[person]['name'];
    createdObject[name] = {
      follows: [],
      followed_by: [],
      not_followed_by: [],
    };
  }
  return createdObject;
};
const populateFollows = function (createdObj, data) {
  for (mutatedPerson in createdObj) {
    for (originalPerson in data) {
      let name = data[originalPerson]['name'];

      if (name === mutatedPerson) {
        for (eachFollow of data[originalPerson]['follows']) {
          for (originalPerson in data) {
            if (originalPerson === eachFollow) {
              createdObj[mutatedPerson]['follows'].push(
                data[originalPerson]['name']
              );
            }
          }
        }
      }
    }
  }
  return createdObj;
};
const populateFollowers = function (createdObj, data) {
  for (originalPerson in data) {
    let name = data[originalPerson]['name'];

    //console.log(
    //`First loop through original data checking who follows ${name}`
    //);
    for (originalPerson2 in data) {
      let name2 = data[originalPerson2]['name'];
      let followList = data[originalPerson2]['follows'];

      //console.log(
      //`Second loop through original data, checking if ${name2} follows ${name}`
      //);
      for (eachFollow of followList) {
        //console.log(
        //  `third loop checking each follow. Does ${eachFollow} = ${originalPerson}?`
        //);
        if (eachFollow === originalPerson) {
          createdObj[name]['followed_by'].push(name2);
        }
      }
    }
  }
  return createdObj;
};
const populateNonFollowers = function (createdObj, data) {
  for (originalPerson in data) {
    let name = data[originalPerson]['name'];

    //console.log(
    //`First loop through original data checking who follows ${name}`
    //);
    for (originalPerson2 in data) {
      let name2 = data[originalPerson2]['name'];
      let followList = data[originalPerson2]['follows'];

      //console.log(
      //`Second loop through original data, checking if ${name2} follows ${name}`
      //)
      if (
        !followList.includes(originalPerson) &&
        originalPerson !== originalPerson2
      ) {
        createdObj[name]['not_followed_by'].push(name2);
      }
    }
  }
  return createdObj;
};
const printAll2 = function (data) {
  const masterObj = createNewObj(data);
  const masterObj2 = populateFollows(masterObj, data);
  const masterObj3 = populateFollowers(masterObj2, data);
  const masterObj4 = populateNonFollowers(masterObj3, data);
  console.log(masterObj4);
};
//printAll2(data);
