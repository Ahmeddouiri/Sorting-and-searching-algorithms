var card = [2,4,1,9,1,2,3,5,4,8,0,3];

for (var i = 1; i < card.length; i++)
    for (var j = 0; j < i; j++)
        if (card[i] < card[j]) {
            var x = card[i];
            card[i] = card[j];
            card[j] = x;
        }

console.log(card);