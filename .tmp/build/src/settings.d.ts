import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
 * Data Point Formatting Card
 */
export declare class CircleSettings extends FormattingSettingsCard {
    circleColor: formattingSettings.ColorPicker;
    circleThickness: formattingSettings.NumUpDown;
    name: string;
    displayName: string;
    visible: boolean;
    slices: FormattingSettingsSlice[];
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    circle: CircleSettings;
    cards: FormattingSettingsCard[];
}
