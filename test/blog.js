const blog = artifacts.require('Blog')
const assert = require('assert')
let contractInstance

contract('Blog', accounts => {
  beforeEach(async () => {
    contractInstance = await blog.deployed()
  })

  it('the articles counter should be zero at the beginning', async () => {
    const expectedValue = 0
    const actualValue = parseInt(await contractInstance.articlesCounter())

    assert.equal(expectedValue, actualValue, 'The values are not equal')
  })

  it('should publish an article correctly', async () => {
    const title = 'This is a test'
    const content = 'This is the content'

    await contractInstance.publishArticle(title, content)
    const myArticle = await contractInstance.articles(0)

    assert.equal(title, myArticle[0], 'The title is not correct')
    assert.equal(content, myArticle[1], 'The content is not correct')
  })

  it('should not allow the title of the article to be empty', async () => {
    const title = ''
    const content = 'This is the content'
    let isExecutingTheFunction = true

    try {
      await contractInstance.publishArticle(title, content)
    } catch (e) {
      isExecutingTheFunction = false
    }

    if(isExecutingTheFunction) {
      assert.ok(false, 'The function should not allow empty titles')
    } else {
      assert.ok(true, 'The test is correct')
    }
  })

  it('should not allow the content of the article to be empty', async () => {
    const title = 'This is the title'
    const content = ''
    let isExecutingTheFunction = true

    try {
      await contractInstance.publishArticle(title, content)
    } catch (e) {
      isExecutingTheFunction = false
    }

    if(isExecutingTheFunction) {
      assert.ok(false, 'The function should not allow empty contents')
    } else {
      assert.ok(true, 'The test is correct')
    }
  })
})
