// компонент иконки
import VIcon from "@/components/Icon/VIcon.vue";
export { VIcon };

// иконки
import CloseIcon from "@/components/Icons/CloseIcon.vue";
import DuplicateIcon from "@/components/Icons/DuplicateIcon.vue";
import ArrowUpIcon from "@/components/Icons/ArrowUpIcon.vue";
import ArrowDownIcon from "@/components/Icons/ArrowDownIcon.vue";
import PersonIcon from "@/components/Icons/PersonIcon.vue";
import EyeOnIcon from "@/components/Icons/EyeOnIcon.vue";
import EyeOffIcon from "@/components/Icons/EyeOffIcon.vue";
import SearchIcon from "@/components/Icons/SearchIcon.vue";

export {
  CloseIcon,
  DuplicateIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PersonIcon,
  EyeOnIcon,
  EyeOffIcon,
  SearchIcon,
};

// Accordion
import VAccordion from "@/components/Accordion/VAccordion.vue";
import { VAccordion as VAccordionType } from "@/components/Accordion/VAccordion.type";
export { VAccordion, VAccordionType };

// Autocomplete
import VAutocomplete from "@/components/Autocomplete/VAutocomplete.vue";
import { VAutocomplete as VAutocompleteType } from "@/components/Autocomplete/VAutocomplete.types";
export { VAutocomplete, VAutocompleteType };

// Button
import VButton from "@/components/Button/VButton.vue";
import { VButton as VButtonType } from "@/components/Button/VButton.types";
export { VButton, VButtonType };

// Card
import VCard from "@/components/Card/VCard.vue";
import { VCard as VCardType } from "@/components/Card/VCard.types";
export { VCard, VCardType };

// Checkbox
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";
import { VCheckbox as VCheckboxType } from "@/components/Checkbox/VCheckbox.types";
export { VCheckbox, VCheckboxType };

// Chip
import VChip from "@/components/Chip/VChip.vue";
import { VChip as VChipTypes } from "@/components/Chip/VChip.types";
export { VChip, VChipTypes };

// Input
import VInput from "@/components/Input/VInput.vue";
import { VInput as VInputTypes } from "@/components/Input/VInput.types";
export { VInput, VInputTypes };

// Label
import VLabel from "@/components/Label/VLabel.vue";
import { VLabel as VLabelType } from "@/components/Label/VLabel.types";
export { VLabel, VLabelType };

// Link
import VLink from "@/components/Link/VLink.vue";
import { VLink as VLinkTypes } from "@/components/Link/VLink.types";
export { VLink, VLinkTypes };

// Loader
import VLoader from "@/components/Loader/VLoader.vue";
import { VLinearSpinner as VLoaderType } from "@/components/Loader/VLoader.types";
export { VLoader, VLoaderType };

// Progress
import VProgress from "@/components/Progress/VProgress.vue";
import { VProgress as VProgressTypes } from "@/components/Progress/VProgress.types";
export { VProgress, VProgressTypes };

// RadioButton
import VRadioButton from "@/components/RadioButton/VRadioButton.vue";
import { VRadioButton as VRadioButtonType } from "@/components/RadioButton/VRadioButton.types";
export { VRadioButton, VRadioButtonType };

// Select
import VSelect from "@/components/Select/VSelect.vue";
import { VSelect as VSelectType } from "@/components/Select/VSelect.types";
export { VSelect, VSelectType };

// Slider
import VSlider from "@/components/Slider/VSlider.vue";
import { VSlider as VSliderType } from "@/components/Slider/VSlider.types";
export { VSlider, VSliderType };

// VSpinner
import VSpinner from "@/components/Spinner/VSpinner.vue";
import { VSpinner as VSpinnerType } from "@/components/Spinner/VSpinner.types";
export { VSpinner, VSpinnerType };

// Switch
import VSwitch from "@/components/Switch/VSwitch.vue";
import { VSwitch as VSwitchType } from "@/components/Switch/VSwitch.types";
export { VSwitch, VSwitchType };

// Table
import VTable from "@/components/Table/VTable.vue";
import VTBody from "@/components/Table/VTBody.vue";
import VTCell from "@/components/Table/VTCell.vue";
import VTHead from "@/components/Table/VTHead.vue";
import VTRow from "@/components/Table/VTRow.vue";
import {
  VTBody as VTBodyType,
  VTCell as VTCellType,
  VTRow as VTRowType,
  VThead as VTheadType,
} from "@/components/Table/VTable.types";
export {
  VTable,
  VTBody,
  VTCell,
  VTHead,
  VTRow,
  VTBodyType,
  VTCellType,
  VTRowType,
  VTheadType,
};

// VTabs
import VTab from "@/components/Tabs/VTab.vue";
import VTabs from "@/components/Tabs/VTabs.vue";
import { VTabs as VTabsType } from "@/components/Tabs/VTabs.types";
import {
  CreateTabsProvidedType,
  createTabs,
  getTabs,
} from "@/components/Tabs/VTabs.provide";
export { VTab, VTabs, VTabsType, CreateTabsProvidedType, createTabs, getTabs };

// Textarea
import VTextarea from "@/components/Textarea/VTextarea.vue";
import { VTextarea as VTextareaType } from "@/components/Textarea/VTextarea.types";
export { VTextarea, VTextareaType };

import "@/assets/_index.scss";
import "@/assets/_extends.scss";
import "@/assets/_mixins.scss";
import "@/assets/_variables.scss";

export * from "../shared/utils";
export * from "../shared/hooks/useRefDebounced";
export * from "../shared/constants";
export * from "../shared/types";
export * from "../shared/utils";
