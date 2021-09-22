import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppRootType} from "../redux/store-redux";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppRootType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

//T is just a generic with an arbitrary name
export function withAuthRedirect<T>(WrappedComponent: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props;
        console.log(isAuth);

        if (!isAuth) return <Redirect to={"/login"}/>
        return <WrappedComponent  {...restProps as T}/>
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)

}
   /*function RedirectComponent(props: MapStateToPropsType & P) {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={"/login"}/>
        return <WrappedComponent {...restProps as unknown as P}/>
    }*/



