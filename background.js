  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });

let someObject = {}
function request(url, propName) {
	const Http = new XMLHttpRequest();
	Http.open("GET", url);
	
	Http.onreadystatechange = function () {
		console.log(this.readyState);
		if(this.readyState == 4 && this.status == 200) {
			someObject = {...someObject, [`${propName}`]: "hello" };
			console.log(someObject);
		}
	};
	Http.send();
}

console.log("FUCK");
const url='https://jsonplaceholder.typicode.com/posts';
for(let i = 0; i < 10; i = i + 1) {
	request(url, i.toString());
}


	