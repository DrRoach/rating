var rating = {};

//Set the default icons
rating.selectedIcon = 'selectedStar.svg';
rating.unselectedIcon = 'unselectedStar.svg';
rating.defaultRating = 3;
rating.outOf = 5;
rating.name = 'rating';

rating.create = function(settings){
    //Set the icons if they have been set
    this.selectedIcon = settings.selectedIcon || this.selectedIcon;
    this.unselectedIcon = settings.unselectedIcon || this.unselectedIcon;

    //Set both the outOf and defaultRatings
    this.defaultRating = settings.defaultRating || this.defaultRating;
    this.outOf = settings.outOf || rating.outOf;

    //Set the default name
    this.name = settings.name || rating.name;

    var html = '<input type="hidden" name="'+this.name+'" value="'+this.defaultRating+'">';
    //Create the ratings HTML
    for(var i = 0; i < this.defaultRating; i++) {
        html = html + '<img src="'+this.selectedIcon+'" data-position="'+(i+1)+'">';
    }
    for(var i = 0; i < this.outOf - this.defaultRating; i++) {
        html = html + '<img src="'+this.unselectedIcon+'" data-position="'+(this.defaultRating+i+1)+'">';
    }
    $(settings.selector).html(html);
    $(settings.selector + ' img').on('mouseover', function() {
        var position = $(this).data('position');
        $(settings.selector + ' img').each(function(i, e) {
            if(i < position) {
                $(e).attr('src', rating.selectedIcon);
            } else {
                $(e).attr('src', rating.unselectedIcon);
            }
        });
    });

    $(settings.selector + ' img').on('click', function() {
        $(this).siblings('input[name='+rating.name+']').val($(this).data('position'));
    });
}