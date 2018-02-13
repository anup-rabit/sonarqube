/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import * as React from 'react';
import { translate } from '../../helpers/l10n';

export default function GlobalFooterSonarCloud(
  { sonarqubeVersion } /*: Props */
) {
  return (
    <div id="footer" className="page-footer page-container">
      <div>
          © 2017-2018 <a href="http://www.villagechief.com" title="Village Chief Pty Ltd">VillageChief Pty Ltd</a>. All rights reserved.
      </div>
      <GlobalFooterBranding />
      <div>
        {!sonarqubeVersion &&
          translateWithParameters('footer.version_x', sonarqubeVersion)}
        {!sonarqubeVersion && ' - '}
        <a href="http://www.gnu.org/licenses/lgpl-3.0.txt">{translate('footer.licence')}</a>
        {' - '}
        <a href="https://www.code-scan.com/tos/">{translate('footer.terms')}</a>
        {' - '}
        <a href="https://www.linkedin.com/company/villagechief/">Linkedin</a>
        {' - '}
        <a href="https://www.facebook.com/CodeScanForSalesforce/">Facebook</a>
        {' - '}
        <a href="https://twitter.com/CodeScanforSFDC">Twitter</a>
        {' - '}
        <a href="https://www.code-scan.com/help/support/">{translate('footer.help')}</a>
        {' - '}
        <a href="https://www.code-scan.com/cloud/getting-started/">{translate('footer.about')}</a>
      </div>
    </div>
  );
}
