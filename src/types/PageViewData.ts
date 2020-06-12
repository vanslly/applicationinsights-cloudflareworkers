// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// THIS FILE WAS AUTOGENERATED
import { EventData } from './EventData'
import { DataSanitizer } from '../DataSanitizer'

interface PageViewDataInterface {
	/**
	 * Request URL with all query string parameters
	 */
	url?: string;

	/**
	 * Event name. Keep it low cardinality to allow proper grouping and useful metrics.
	 */
	name: string;

	/**
	 * Request duration in format: DD.HH:MM:SS.MMMMMM. For a page view (PageViewData), this is the duration. For a page view with performance information (PageViewPerfData), this is the page load time. Must be less than 1000 days.
	 */
	duration?: string;

	/**
	 * Identifier of a page view instance. Used for correlation between page view and other telemetry items.
	 */
	id?: string;

	/**
	 * Collection of custom properties.
	 */
	properties?: any;

	/**
	 * Collection of custom measurements.
	 */
	measurements?: any;
}

/**
 * An instance of PageView represents a generic action on a page like a button click. It is also the base type for PageView.
 */
export class PageViewData extends EventData {
	/**
	 * Schema version
	 */
	public ver : number

	/**
	 * Request URL with all query string parameters
	 */
	public url : string

	/**
	 * Event name. Keep it low cardinality to allow proper grouping and useful metrics.
	 */
	public name : string

	/**
	 * Request duration in format: DD.HH:MM:SS.MMMMMM. For a page view (PageViewData), this is the duration. For a page view with performance information (PageViewPerfData), this is the page load time. Must be less than 1000 days.
	 */
	public duration : string

	/**
	 * Identifier of a page view instance. Used for correlation between page view and other telemetry items.
	 */
	public id : string

	/**
	 * Collection of custom properties.
	 */
	public properties : any

	/**
	 * Collection of custom measurements.
	 */
	public measurements : any

	constructor(options:PageViewDataInterface) {
		super(options)

		this.url = DataSanitizer.sanitizeUrl(options.url)
		this.id = DataSanitizer.sanitizeKey(options.id)
		this.duration = DataSanitizer.sanitizeString(options.duration)
	}
}
