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
        it('feeds defined', function() {
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

    // The menu test suite
    describe('The menu', function() {

        // Test ensures the menu "element" is hidden by default.
        it('hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // This test validates proper functioning of the var menu toggle.
        it('toggles visibility when icon clicked', function() {
            var clickedIcon = $('.menu-icon-link');

            // This tests for menu display.
            clickedIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // This tests for menu hide.
            clickedIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // The initial entries test suite.
    describe('Initial Entries', function() {

        // asynchronous loadFeed through beforeEach.
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // tests for at least one entry in feed.
        it('should have at least one feed', function() {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

    // New Feed Selection test suite
    describe('New Feed Selection', function() {

        // tests that new content is loaded by loadFeed().
        var $feedOne;
        var $feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                done();
            });
        });

        it('content changed after loading feed', function(done) {
            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                expect(feedTwo).not.toEqual(feedOne);
                done();
            });
        });
    });
}());
