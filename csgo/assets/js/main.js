var crosshairButton = document.getElementById('crosshair')

function myFunction() {
    var copyText = `cl_crosshair_drawoutline "1";cl_crosshair_dynamic_maxdist_splitratio "0";cl_crosshair_dynamic_splitalpha_innermod "1";cl_crosshair_dynamic_splitalpha_outermod "0.300000";cl_crosshair_dynamic_splitdist "3";cl_crosshair_friendly_warning "1";cl_crosshair_outlinethickness "1";cl_crosshair_sniper_show_normal_inaccuracy "0";cl_crosshair_sniper_width "1";cl_crosshair_t "0";cl_crosshairalpha "255";cl_crosshaircolor "5";cl_crosshaircolor_b "250";cl_crosshaircolor_g "200";cl_crosshaircolor_r "120";cl_crosshairdot "1";cl_crosshairgap "0";cl_crosshairgap_useweaponvalue "0";cl_crosshairsize "0.5";cl_crosshairstyle "4";cl_crosshairthickness ".5";cl_crosshairusealpha "1";cl_fixedcrosshairgap "-2";`
    document.execCommand("copy", value=copyText);
}


crosshairButton.onclick(click, myFunction())