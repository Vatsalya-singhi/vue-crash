// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import "vuetify/dist/vuetify.min.css";

// import '@fortawesome/fontawesome-free/css/all.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import 'font-awesome/css/font-awesome.min.css';

import '@fortawesome/fontawesome-free/css/all.css'

import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
    icons: {
        iconfont: 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg',
    },
    theme: {
        themes: {
            light: {
                primary: colors.teal.darken1, // #E53935
                secondary: colors.teal.lighten4, // #FFCDD2
                accent: colors.teal.base, // #3F51B5
            },
        },
    },
})
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
