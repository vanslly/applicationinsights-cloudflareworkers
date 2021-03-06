// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// THIS FILE WAS AUTOGENERATED
import { Domain } from './Domain'
import { DataSanitizer } from '../DataSanitizer'

interface AvailabilityDataInterface { /**
	 * Identifier of a test run. Use it to correlate steps of test run and telemetry generated by the service.
	 */
	id?: string;

	/**
	 * Name of the test that these availability results represent.
	 */
	name?: string;

	/**
	 * Duration in format: DD.HH:MM:SS.MMMMMM. Must be less than 1000 days.
	 */
	duration: string;

	/**
	 * Success flag.
	 */
	success?: boolean;

	/**
	 * Name of the location where the test was run from.
	 */
	runLocation?: string;

	/**
	 * Diagnostic message for the result.
	 */
	message?: string;

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
 * Instances of AvailabilityData represent the result of executing an availability test.
 */
export class AvailabilityData extends Domain { /**
	 * Schema version
	 */
	public ver : number

	/**
	 * Identifier of a test run. Use it to correlate steps of test run and telemetry generated by the service.
	 */
	public id : string

	/**
	 * Name of the test that these availability results represent.
	 */
	public name : string

	/**
	 * Duration in format: DD.HH:MM:SS.MMMMMM. Must be less than 1000 days.
	 */
	public duration : string

	/**
	 * Success flag.
	 */
	public success : boolean

	/**
	 * Name of the location where the test was run from.
	 */
	public runLocation : string

	/**
	 * Diagnostic message for the result.
	 */
	public message : string

	/**
	 * Collection of custom properties.
	 */
	public properties : any

	/**
	 * Collection of custom measurements.
	 */
	public measurements : any

	constructor(options : AvailabilityDataInterface) {
		super()

		this.ver = 2
		this.properties = DataSanitizer.sanitizeProperties(options.properties || {})
		this.measurements = DataSanitizer.sanitizeMeasurements(options.measurements || {})

		this.duration = DataSanitizer.sanitizeString(options.duration)
		this.id = DataSanitizer.sanitizeKey(options.id)
		this.message = DataSanitizer.sanitizeMessage(options.message)
		this.name = DataSanitizer.sanitizeKey(options.name)
		this.runLocation = DataSanitizer.sanitizeString(options.runLocation)
		this.success = options.success
	}
}
