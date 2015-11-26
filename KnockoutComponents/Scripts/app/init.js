require(
        [
            '/scripts/libs/knockout-3.3.0.js',
            '/scripts/app/components/models/mainViewModel.js',
            '/scripts/app/components/models/component-like-widget.js',
            '/scripts/app/components/models/bla-bla-widget.js'
        ],
        function (ko, appViewModel, likeWidgetViewModel, blaBlaViewModel)
        {
            //component registration
            ko.components.register(
                                    'like-or-dislike',
                                    {
                                        viewModel: { require: 'components/models/component-like-widget' },
                                        template: { require: '/scripts/initializers/text.js!components/templates/component-like-widget.html' }
                                    }
                                  );

            ko.components.register(
                                     'bla-bla-bla',
                                     {
                                         viewModel: { require: 'components/models/bla-bla-widget' },
                                         template: { require: '/scripts/initializers/text.js!components/templates/bla-bla-widget.html' }
                                     }
                                  );

            ko.applyBindings(new appViewModel());
            ko.applyBindings(new likeWidgetViewModel());
            ko.applyBindings(new blaBlaViewModel());
        }
);
