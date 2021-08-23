// The ordering of teams is decided by who received the most position-one votes. If two or more teams tie in the first position, we consider the second position to resolve the conflict, if they tie again, we continue this process until the ties are resolved. If two or more teams are still tied after considering all positions, we rank them alphabetically based on their team letter.

// Given an array of strings votes which is the votes of all voters in the ranking systems. Sort all teams according to the ranking system described above.

// Return a string of all teams sorted by the ranking system.

// Example 1:

// Input: votes = ["ABC","ACB","ABC","ACB","ACB"]
// Output: "ACB"
// Explanation: Team A was ranked first place by 5 voters. No other team was voted as first place so team A is the first team.
// Team B was ranked second by 2 voters and was ranked third by 3 voters.
// Team C was ranked second by 3 voters and was ranked third by 2 voters.
// As most of the voters ranked C second, team C is the second team and team B is the third.
// Example 2:

// Input: votes = ["WXYZ","XYZW"]
// Output: "XWYZ"
// Explanation: X is the winner due to tie-breaking rule. X has same votes as W for the first position but X has one vote as second position while W doesn't have any votes as second position.

// var rankTeams = function (votes) {
//   let voteObj = {};
//   let str = "";
//   for (let i = 0; i < votes.length; i++) {
//     let temp = votes[i].split("");
//     for (let j = 0; j < temp.length; j++) {
//       if (!voteObj[temp[j]]) {
//         voteObj[temp[j]] = temp.indexOf(temp[j]);
//       } else {
//         voteObj[temp[j]] += temp.indexOf(temp[j]);
//       }
//     }
//   }
//   const sortable = Object.fromEntries(
//     Object.entries(voteObj).sort(([, a], [, b]) => a - b)
//   );
//   for (let key in sortable) {
//     str += key;
//   }
//   return str;
// };

var rankTeams = function (votes) {
  if (votes.length === 1) return votes[0];
  const score = new Map(
    votes[0].split("").map((c) => [c, new Array(votes[0].length).fill(0)])
  );
  console.log(score);
  for (s of votes) {
    console.log(s);
    for (let i = 0; i < s.length; i++) {
      console.log(s[i]);
      score.get(s[i])[i]++;
      console.log(score);
    }
  }

  return votes[0]
    .split("")
    .sort((a, b) => {
      for (let i = 0; i < votes[0].length; i++) {
        if (score.get(a)[i] > score.get(b)[i]) return -1;
        if (score.get(a)[i] < score.get(b)[i]) return 1;
      }
      return a < b ? -1 : 1;
    })
    .join("");
};

// console.log(rankTeams(["BCA", "CAB", "CBA", "ABC", "ACB", "BAC"]));
console.log(
  rankTeams([
    "FVSHJIEMNGYPTQOURLWCZKAX",
    "AITFQORCEHPVJMXGKSLNZWUY",
    "OTERVXFZUMHNIYSCQAWGPKJL",
    "VMSERIJYLZNWCPQTOKFUHAXG",
    "VNHOZWKQCEFYPSGLAMXJIUTR",
    "ANPHQIJMXCWOSKTYGULFVERZ",
    "RFYUXJEWCKQOMGATHZVILNSP",
    "SCPYUMQJTVEXKRNLIOWGHAFZ",
    "VIKTSJCEYQGLOMPZWAHFXURN",
    "SVJICLXKHQZTFWNPYRGMEUAO",
    "JRCTHYKIGSXPOZLUQAVNEWFM",
    "NGMSWJITREHFZVQCUKXYAPOL",
    "WUXJOQKGNSYLHEZAFIPMRCVT",
    "PKYQIOLXFCRGHZNAMJVUTWES",
    "FERSGNMJVZXWAYLIKCPUQHTO",
    "HPLRIUQMTSGYJVAXWNOCZEKF",
    "JUVWPTEGCOFYSKXNRMHQALIZ",
    "MWPIAZCNSLEYRTHFKQXUOVGJ",
    "EZXLUNFVCMORSIWKTYHJAQPG",
    "HRQNLTKJFIEGMCSXAZPYOVUW",
    "LOHXVYGWRIJMCPSQENUAKTZF",
    "XKUTWPRGHOAQFLVYMJSNEIZC",
    "WTCRQMVKPHOSLGAXZUEFYNJI",
  ])
);
