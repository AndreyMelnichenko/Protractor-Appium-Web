describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('https://angularjs.org');

        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        todoList.get(2).element(by.css('input')).click();
        var completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));

    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
    it('should add one and two', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(latestResult.getText()).toEqual('3');
    });
    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(latestResult.getText()).toEqual('3');
    });

    it('should add four and six', function() {
        expect(latestResult.getText()).toEqual('0');
    });

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
    it('should have a history', function() {
        add(1, 2);
        add(3, 4);

        expect(history.count()).toEqual(2);

        add(5, 6);

        expect(history.count()).toEqual(3);
    });
    it('should have a history 2', function() {
        add(1, 2);
        add(3, 4);

        expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('3 + 4');
    });
});
