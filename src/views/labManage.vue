<template>
    <div data-v-02677b06="" class="manager-main-right">
        <div data-v-02677b06="">
            <div class="card" style="margin-bottom: 5px;">
                <div class="el-input el-input--prefix" style="width: 240px;">
                    <!-- input --><!-- prepend slot --><!--v-if-->
                    <div class="el-input__wrapper" tabindex="-1"><!-- prefix slot --><span
                            class="el-input__prefix"><span class="el-input__prefix-inner"><i
                                    class="el-icon el-input__icon"><svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                            d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704">
                                        </path>
                                    </svg></i></span></span><input class="el-input__inner" type="text"
                            autocomplete="off" tabindex="0" placeholder="请输入实验室名称"
                            id="el-id-2142-128"><!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if-->
                </div>
                <div class="el-select" style="width: 240px; margin-left: 4px;">
                    <div class="el-select__wrapper el-tooltip__trigger el-tooltip__trigger" tabindex="-1"><!--v-if-->
                        <div class="el-select__selection"><!--v-if-->
                            <div class="el-select__selected-item el-select__input-wrapper is-hidden"><input type="text"
                                    class="el-select__input" autocomplete="off" role="combobox" readonly
                                    spellcheck="false" aria-activedescendant="" aria-controls="el-id-2142-126"
                                    aria-expanded="false" aria-autocomplete="none" aria-haspopup="listbox"
                                    id="el-id-2142-129" style="width: 11px;"><!--v-if--></div>
                            <div class="el-select__selected-item el-select__placeholder is-transparent">
                                <span>请选择所属学院</span>
                            </div>
                        </div>
                        <div class="el-select__suffix"><i class="el-icon el-select__caret el-select__icon"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                    <path fill="currentColor"
                                        d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z">
                                    </path>
                                </svg></i><!--v-if--><!--v-if--></div>
                    </div>
                </div><button aria-disabled="false" type="button" class="el-button el-button--info is-plain"
                    style="margin-left: 10px;"><!--v-if--><span class="">查询</span></button><button aria-disabled="false"
                    type="button" class="el-button el-button--warning is-plain"
                    style="margin-left: 10px;"><!--v-if--><span class="">重置</span></button>
            </div>
            <div class="card" style="margin-bottom: 5px;"><button aria-disabled="false" type="button"
                    class="el-button el-button--primary is-plain"><!--v-if--><span class="">新增</span></button><button
                    aria-disabled="false" type="button" class="el-button el-button--danger is-plain"><!--v-if--><span
                        class="">批量删除</span></button></div>
            <div class="card" style="margin-bottom: 5px;">
                <div class="el-table--fit el-table--enable-row-transition el-table el-table--layout-fixed is-scrolling-none"
                    data-prefix="el" strip="">
                    <div class="el-table__inner-wrapper">
                        <div class="hidden-columns">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="el-table__header-wrapper">
                            <table class="el-table__header" border="0" cellpadding="0" cellspacing="0"
                                style="width: 1152px;">
                                <colgroup>
                                    <col name="el-table_7_column_63" width="55">
                                    <col name="el-table_7_column_64" width="139">
                                    <col name="el-table_7_column_65" width="133">
                                    <col name="el-table_7_column_66" width="133">
                                    <col name="el-table_7_column_67" width="133">
                                    <col name="el-table_7_column_68" width="133">
                                    <col name="el-table_7_column_69" width="133">
                                    <col name="el-table_7_column_70" width="133">
                                    <col name="el-table_7_column_71" width="160">
                                </colgroup>
                                <thead class="">
                                    <tr class="">
                                        <th class="el-table_7_column_63 is-center el-table-column--selection is-leaf el-table__cell"
                                            colspan="1" rowspan="1">
                                            <div class="cell"><label class="el-checkbox"><span
                                                        class="el-checkbox__input"><input class="el-checkbox__original"
                                                            type="checkbox" id="el-id-2142-130"><span
                                                            class="el-checkbox__inner"></span></span><!--v-if--></label><!----><!---->
                                            </div>
                                        </th>
                                        <th class="el-table_7_column_64 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">实验室名称<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_65 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">管理员名称<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_66 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">所属学院<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_67 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">实验室规章制度<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_68 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">实验室地址<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_69 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">开放时间<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_70 is-leaf el-table__cell" colspan="1" rowspan="1">
                                            <div class="cell">结束时间<!----><!----></div>
                                        </th>
                                        <th class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column is-leaf el-table__cell"
                                            colspan="1" rowspan="1" style="right: 0px;">
                                            <div class="cell">操作<!----><!----></div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="el-table__body-wrapper">
                            <div class="el-scrollbar">
                                <div class="el-scrollbar__wrap el-scrollbar__wrap--hidden-default">
                                    <div class="el-scrollbar__view"
                                        style="display: inline-block; vertical-align: middle;">
                                        <table class="el-table__body" cellspacing="0" cellpadding="0" border="0"
                                            style="table-layout: fixed; width: 1152px;">
                                            <colgroup>
                                                <col name="el-table_7_column_63" width="55">
                                                <col name="el-table_7_column_64" width="139">
                                                <col name="el-table_7_column_65" width="133">
                                                <col name="el-table_7_column_66" width="133">
                                                <col name="el-table_7_column_67" width="133">
                                                <col name="el-table_7_column_68" width="133">
                                                <col name="el-table_7_column_69" width="133">
                                                <col name="el-table_7_column_70" width="133">
                                                <col name="el-table_7_column_71" width="160">
                                            </colgroup><!--v-if-->
                                            <tbody tabindex="-1">
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-134"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理实验室03</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->李月</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理应用学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell el-tooltip" style="width: 131px;">
                                                            <!---->1.必须是物理学院 2.必须是硕士及以上学历 3.实验知识要牢固
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理楼102</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->09:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->11:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-135"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->计算机实验室02</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->王大锤</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->电子与信息工程学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell el-tooltip" style="width: 131px;"><!---->不要玩游戏
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->明德楼103</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->08:45</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->18:15</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-136"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理实验室02</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->马小跳</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理应用学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1" aria-describedby="el-id-2142-283">
                                                        <div class="cell el-tooltip" style="width: 131px;">
                                                            <!---->1.必须是物理学院
                                                            2.必须是硕士及以上学历
                                                            3.实验知识要牢固
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理楼102</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->08:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->23:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-137"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->计算机实验室01</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->王大锤</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->电子与信息工程学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell el-tooltip" style="width: 131px;">
                                                            <!---->1.不要打游戏
                                                            2.不要迟到
                                                            3.设备出现问题及时上报
                                                            4.不要使用自己老师未申请使用的设备，一旦发现有认为损坏设备的行为将会上报学校，给予损坏人处分处理。
                                                            5.如果申请了设备但是2个小时以内为使用将会自动取消申请。
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->综合楼101</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->08:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->23:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-138"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理实验室01</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->马小跳</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理应用学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell el-tooltip" style="width: 131px;">
                                                            <!---->1.必须有老师在场学生才可以进入
                                                            2.器械损坏及时上报
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->物理楼101</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->10:00</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->16:00</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-139"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->生物实验室01</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->王大锤</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->生物学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell el-tooltip" style="width: 131px;"><!---->1.不能早退
                                                            2.不能在实验室吃早餐</div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->综合楼102</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->08:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->23:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                                <tr class="el-table__row">
                                                    <td class="el-table_7_column_63 is-center el-table-column--selection el-table__cell"
                                                        rowspan="1" colspan="1">
                                                        <div class="cell"><!----><label class="el-checkbox"><span
                                                                    class="el-checkbox__input"><input
                                                                        class="el-checkbox__original" type="checkbox"
                                                                        id="el-id-2142-140"><span
                                                                        class="el-checkbox__inner"></span></span><!--v-if--></label>
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_64 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->电子与信息工程实验室01</div>
                                                    </td>
                                                    <td class="el-table_7_column_65 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->王大锤</div>
                                                    </td>
                                                    <td class="el-table_7_column_66 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->电子与信息工程学院</div>
                                                    </td>
                                                    <td class="el-table_7_column_67 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell el-tooltip" style="width: 131px;"><!---->不可以玩游戏
                                                        </div>
                                                    </td>
                                                    <td class="el-table_7_column_68 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->明德楼101</div>
                                                    </td>
                                                    <td class="el-table_7_column_69 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->08:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_70 el-table__cell" rowspan="1"
                                                        colspan="1">
                                                        <div class="cell"><!---->23:30</div>
                                                    </td>
                                                    <td class="el-table_7_column_71 is-center el-table-fixed-column--right is-first-column el-table__cell"
                                                        rowspan="1" colspan="1" style="right: 0px;">
                                                        <div class="cell"><!----><button aria-disabled="false"
                                                                type="button"
                                                                class="el-button el-button--primary is-plain"><!--v-if--><span
                                                                    class="">编辑</span></button><button
                                                                aria-disabled="false" type="button"
                                                                class="el-button el-button--danger is-plain"><!--v-if--><span
                                                                    class="">删除</span></button></div>
                                                    </td>
                                                </tr>
                                            </tbody><!--v-if-->
                                        </table><!--v-if--><!--v-if-->
                                    </div>
                                </div>
                                <div class="el-scrollbar__bar is-horizontal" style="display: none;">
                                    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                                </div>
                                <div class="el-scrollbar__bar is-vertical" style="display: none;">
                                    <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                                </div>
                            </div>
                        </div><!--v-if--><!--v-if-->
                    </div>
                    <div class="el-table__column-resize-proxy" style="display: none;"></div>
                </div>
            </div>
            <div class="card">
                <div class="el-pagination is-background"><button type="button" class="btn-prev is-first" disabled
                        aria-label="上一页" aria-disabled="true"><i class="el-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z">
                                </path>
                            </svg></i></button>
                    <ul class="el-pager">
                        <li class="is-active number" aria-current="true" aria-label="第 1 页" tabindex="0"> 1 </li>
                        <!--v-if--><!--v-if--><!--v-if-->
                    </ul><button type="button" class="btn-next is-last" disabled aria-label="下一页"
                        aria-disabled="true"><i class="el-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024">
                                <path fill="currentColor"
                                    d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z">
                                </path>
                            </svg></i></button>
                </div>
            </div>
            <div class="el-overlay" style="z-index: 2029; display: none;">
                <div role="dialog" aria-modal="true" aria-label="实验室信息" aria-describedby="el-id-2142-127"
                    class="el-overlay-dialog"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import '../assets/js/index-HHlgu3jn.js'
</script>
<style scoped>
* {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}


.manager-main-right {
    /* flex: 1; */
    /* width: 0; */
    background-color: #f8f8ff;
    padding: 10px;
}

.card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px #0000001a;
}

.el-input {
    --el-input-height: var(--el-component-size);
    position: relative;
    font-size: var(--el-font-size-base);
    display: inline-flex;
    width: var(--el-input-width);
    line-height: var(--el-input-height);
    box-sizing: border-box;
    vertical-align: middle;
}

.el-input__wrapper {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1px 11px;
    background-color: var(--el-input-bg-color, var(--el-fill-color-blank));
    background-image: none;
    border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
    cursor: text;
    transition: var(--el-transition-box-shadow);
    transform: translateZ(0);
    box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
}

.el-input__prefix {
    display: inline-flex;
    white-space: nowrap;
    flex-shrink: 0;
    flex-wrap: nowrap;
    height: 100%;
    text-align: center;
    color: var(--el-input-icon-color, var(--el-text-color-placeholder));
    transition: all var(--el-transition-duration);
    pointer-events: none;
}

.el-input__prefix-inner {
    pointer-events: all;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.el-icon svg {
    height: 1em;
    width: 1em;
}

.el-input__prefix-inner>:first-child,
.el-input__prefix-inner>:first-child.el-input__icon {
    margin-left: 0;
}

.el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - 2px);
    width: 100%;
    flex-grow: 1;
    -webkit-appearance: none;
    color: var(--el-input-text-color, var(--el-text-color-regular));
    font-size: inherit;
    height: var(--el-input-inner-height);
    line-height: var(--el-input-inner-height);
    padding: 0;
    outline: none;
    border: none;
    background: none;
    box-sizing: border-box;
}

.el-select {
    --el-select-border-color-hover: var(--el-border-color-hover);
    --el-select-disabled-color: var(--el-disabled-text-color);
    --el-select-disabled-border: var(--el-disabled-border-color);
    --el-select-font-size: var(--el-font-size-base);
    --el-select-close-hover-color: var(--el-text-color-secondary);
    --el-select-input-color: var(--el-text-color-placeholder);
    --el-select-multiple-input-color: var(--el-text-color-regular);
    --el-select-input-focus-border-color: var(--el-color-primary);
    --el-select-input-font-size: 14px;
    --el-select-width: 100%;
}

.el-select__wrapper {
    display: flex;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    text-align: left;
    font-size: 14px;
    padding: 4px 12px;
    gap: 6px;
    min-height: 32px;
    line-height: 24px;
    border-radius: var(--el-border-radius-base);
    background-color: var(--el-fill-color-blank);
    transition: var(--el-transition-duration);
    box-shadow: 0 0 0 1px var(--el-border-color) inset;
}

.el-select__selection {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    min-width: 0;
    gap: 6px;
}

.el-select__input-wrapper.is-hidden {
    position: absolute;
    opacity: 0;
}

.el-select__input {
    border: none;
    outline: none;
    padding: 0;
    color: var(--el-select-multiple-input-color);
    font-size: inherit;
    font-family: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 24px;
    max-width: 100%;
    background-color: transparent;
}

.el-select__prefix,
.el-select__suffix {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 6px;
    color: var(--el-input-icon-color, var(--el-text-color-placeholder));
}

.el-select__prefix,
.el-select__suffix {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 6px;
    color: var(--el-input-icon-color, var(--el-text-color-placeholder));
}

.el-icon svg {
    height: 1em;
    width: 1em;
}

.el-button--info.is-plain,
.el-button--info.is-text,
.el-button--info.is-link {
    --el-button-text-color: var(--el-color-info);
    --el-button-bg-color: var(--el-color-info-light-9);
    --el-button-border-color: var(--el-color-info-light-5);
    --el-button-hover-text-color: var(--el-color-white);
    --el-button-hover-bg-color: var(--el-color-info);
    --el-button-hover-border-color: var(--el-color-info);
    --el-button-active-text-color: var(--el-color-white);
}

.el-button>span {
    display: inline-flex;
    align-items: center;
}

.el-button--warning.is-plain,
.el-button--warning.is-text,
.el-button--warning.is-link {
    --el-button-text-color: var(--el-color-warning);
    --el-button-bg-color: var(--el-color-warning-light-9);
    --el-button-border-color: var(--el-color-warning-light-5);
    --el-button-hover-text-color: var(--el-color-white);
    --el-button-hover-bg-color: var(--el-color-warning);
    --el-button-hover-border-color: var(--el-color-warning);
    --el-button-active-text-color: var(--el-color-white);
}

.el-button>span {
    display: inline-flex;
    align-items: center;
}
</style>
