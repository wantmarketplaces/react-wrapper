/**
 * Copyright 2021 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ReactNode, ReactElement } from "react";
import { Loader, LoaderOptions } from "@googlemaps/js-api-loader";
export declare enum Status {
    LOADING = "LOADING",
    FAILURE = "FAILURE",
    SUCCESS = "SUCCESS"
}
export interface WrapperProps extends LoaderOptions {
    /**
     * Children wrapped by the `<Wrapper>{elements}</Wrapper`.
     */
    children?: ReactNode;
    /**
     * Render prop used to switch on the status.
     */
    render?: (status: Status) => ReactElement;
    /**
     * Callback prop used to access `@googlemaps/js-api-loader` and `Status`.
     *
     * Note: The callback be executed multiple times in the lifecycle of the component.
     */
    callback?: (status: Status, loader: Loader) => void;
}
/**
 * A component to wrap the loading of the Google Maps JavaScript API.
 *
 * ```
 * import { Wrapper } from '@googlemaps/react-wrapper';
 *
 * const MyApp = () => (
 * 	<Wrapper apiKey={'YOUR_API_KEY'}>
 * 		<MyMapComponent />
 * 	</Wrapper>
 * );
 * ```
 *
 * @param props
 */
export declare const Wrapper: ({ children, render, callback, ...options }: WrapperProps) => ReactElement;
