/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experimented with allFeeds in app.js to be an 
         * empty array and refreshed the page.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test loops and determines if the URL
        // defined returns not empty.
        it('URL defined, not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Test looped through each feed and determines that each
        // feed has a name and not empty.
        it('name defined, not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toEqual('string');
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });

    //The menu test suite
    describe('The menu', function() {

        // Test ensures the menu "element" is hidden by default.
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // This test validates proper functioning of the var menu toggle.
        it('changes visibility when icon clicked', function() {
            var clickedIcon = $('.menu-icon-link');

            // This tests for menu display.
            clickedIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // This tests for menu hide.
            clickedIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
