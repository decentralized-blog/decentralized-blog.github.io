pragma solidity 0.4.23;

contract Blog {
  // 1. I need the title, the content, the author and the date the article was published
  // 2. Function to publish articles
  // 3. Some kind of array to store all the articles
  // 4. Some way to get the articles
  struct Article {
    string title;
    string content;
    address author;
    uint256 timestamp;
    uint256 id;
  }

  Article[] public articles;
  uint256 public articlesCounter;

  function publishArticle(string _title, string _content) public returns(uint256) {
    require(bytes(_title)[0] != 0);
    require(bytes(_content)[0] != 0);
    Article memory myArticle = Article(_title, _content, msg.sender, now, articlesCounter);
    articles.push(myArticle);
    articlesCounter++;
    uint256 myId = articlesCounter;
    return myId;
  }
}
