import * as React from 'react';
import { connect } from 'react-redux';
import { IFavouritesListBoxStateProps, IFavouritesListBoxProps, FavouritesListBox } from './favouritesListBox';

const mapStateToProps = (state: any): IFavouritesListBoxStateProps => {
    return {
        favouritedItems: state.WasteLookupApp.favouritedItems ? state.WasteLookupApp.favouritedItems : [],
    };
};

export const FavouritesListBoxConnected: React.ComponentClass<IFavouritesListBoxProps> = connect(mapStateToProps)(FavouritesListBox);
