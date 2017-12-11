describe('userFilter', function () {
    var usersFilter, result;
    
    beforeEach(function () {
        module('demo.strlimit');
        inject(function ($filter) {
            usersFilter = $filter('strlimit');

        });
    });

    describe('limit Charatcters', function () {
        it('should limit the characters ', function () {
           // result = usersFilter(users, '', ['id', 'title']);
           var string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";
            expect(usersFilter(string,10)).to.equal('Lorem Ipsu...');
        });

    });
});