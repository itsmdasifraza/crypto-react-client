import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./ChartType.css";
export default function ChartType({ chartType, handleChartTypeChange }) {
  return (
    <>
      <ToggleButtonGroup
        value={chartType}
        exclusive
        onChange={handleChartTypeChange}
        sx={{
            width:"100%",
          "& .Mui-selected": {
            color: "var(--theme-color-primary) !important",
          },
          borderColor: "var(--theme-color-primary)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid !important",
            borderColor: "unset",
            color: "var(--theme-color-primary)",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--theme-color-primary)",
          },
        }}
      >
        <ToggleButton sx={{
            width:"33.3%"}} value="prices" className="toggle-btn">
          Price
        </ToggleButton>
        <ToggleButton sx={{
            width:"33.3%"}} value="market_caps" className="toggle-btn">
          Market Cap
        </ToggleButton>
        <ToggleButton sx={{
            width:"33.3%"}} value="total_volumes" className="toggle-btn">
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}